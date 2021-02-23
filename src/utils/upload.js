const fs = require('fs')

const aws = require('aws-sdk')

aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY || 'AKIAIWTKAZ33EJKCCEBA',
  secretAccessKey: process.env.AWS_SECERET_KEY || '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',
  region: 'ap-south-1'
})

const s3 = new aws.S3()
const BUCKET_NAME = process.env.BUCKET_NAME || 'p42-pacific'

export const uploadToS3 = (filePath, dirPath, contentType) => {
  return new Promise((resolve, reject) => {
    const params = {
      ACL: 'public-read',
      Bucket: BUCKET_NAME,
      Body: fs.createReadStream(filePath),
      Key: dirPath
    }

    if (contentType) {
      params.ContentType = contentType
    }

    s3.upload(params, (err, data) => {
      if (err) {
        console.log('Error occurred while trying to upload to S3 bucket', err)
        reject(err)
      } else {
        fs.unlinkSync(filePath) // Empty sample folder
        resolve(data)
      }
    })
  })
}

// / Remove Objects from s3 buckets.
export const removeS3File = (filePath) => {
  return new Promise((resolve, reject) => {
    const params = {
      Bucket: BUCKET_NAME,
      Key: filePath
    }

    s3.deleteObject(params, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}
