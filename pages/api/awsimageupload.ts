import aws from 'aws-sdk';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function awsImageUpload(
  req: NextApiRequest,
  res: NextApiResponse
) {
  aws.config.update({
    region: 'eu-north-1',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  });

  const s3Bucket = process.env.AWS_BUCKET;

  const s3 = new aws.S3(); // Create a new instance of S3
  const fileName = req.body.fileName;
  const fileType = req.body.fileType;
  const oldFile = req.body.oldFile;

  console.log(fileName);
  console.log(fileType);

  const s3Params = {
    Bucket: s3Bucket,
    Key: `${req.body.imageCategory}/${fileName}`,
    ContentType: fileType,
    };

  try {

    s3.getSignedUrl('putObject', s3Params, async (err, data) => {
      if (err) {
        return res.json({ success: false, error: err });
      }
      const returnData = {
        signedRequest: data,
        url: `https://${s3Bucket}.s3.amazonaws.com/${req.body.imageCategory}/${fileName}`,
      };

      return res.status(200).json(returnData);
    });
  } catch (err) {
    return res.status(500).json(err);
  }
}
