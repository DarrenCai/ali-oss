var env = process.env;

var config = module.exports;

config.oss = {
  accessKeyId: env.ALI_SDK_OSS_ID,
  accessKeySecret: env.ALI_SDK_OSS_SECRET,
  endpoint: env.ALI_SDK_OSS_ENDPOINT,
  region: env.ALI_SDK_OSS_REGION
};

config.sts = {
  region: env.ALI_SDK_STS_REGION,
  accessKeyId: env.ALI_SDK_STS_ID,
  accessKeySecret: env.ALI_SDK_STS_SECRET,
  roleArn: env.ALI_SDK_STS_ROLE,
  bucket: env.ALI_SDK_STS_BUCKET
};
