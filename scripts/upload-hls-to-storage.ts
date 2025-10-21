import { objectStorageClient } from "../server/objectStorage";
import * as fs from "fs";
import * as path from "path";

async function uploadFile(bucketName: string, localPath: string, remotePath: string) {
  const bucket = objectStorageClient.bucket(bucketName);
  const file = bucket.file(remotePath);
  
  await file.save(fs.readFileSync(localPath), {
    metadata: {
      contentType: getContentType(localPath),
    },
  });
  
  console.log(`Uploaded: ${remotePath}`);
}

function getContentType(filePath: string): string {
  if (filePath.endsWith('.m3u8')) {
    return 'application/vnd.apple.mpegurl';
  } else if (filePath.endsWith('.ts')) {
    return 'video/MP2T';
  }
  return 'application/octet-stream';
}

async function uploadDirectory(bucketName: string, localDir: string, remotePrefix: string) {
  const files = fs.readdirSync(localDir, { recursive: true }) as string[];
  
  for (const file of files) {
    const localPath = path.join(localDir, file);
    const stats = fs.statSync(localPath);
    
    if (stats.isFile()) {
      const remotePath = path.join(remotePrefix, file).replace(/\\/g, '/');
      await uploadFile(bucketName, localPath, remotePath);
    }
  }
}

async function main() {
  const bucketId = process.env.DEFAULT_OBJECT_STORAGE_BUCKET_ID;
  if (!bucketId) {
    console.error("DEFAULT_OBJECT_STORAGE_BUCKET_ID not set");
    process.exit(1);
  }

  // The bucket name is derived from the bucket ID
  const publicPaths = process.env.PUBLIC_OBJECT_SEARCH_PATHS || "";
  const firstPath = publicPaths.split(",")[0]?.trim();
  if (!firstPath) {
    console.error("PUBLIC_OBJECT_SEARCH_PATHS not set");
    process.exit(1);
  }

  const bucketName = firstPath.split("/")[1];
  const publicDir = firstPath.split("/").slice(2).join("/");

  console.log(`Uploading HLS files to bucket: ${bucketName}`);
  console.log(`Public directory: ${publicDir}`);

  // Upload HLS files
  const hlsDir = path.join(process.cwd(), "client/public/videos/hls");
  await uploadDirectory(bucketName, hlsDir, `${publicDir}/hls`);

  console.log("Upload complete!");
}

main().catch(console.error);
