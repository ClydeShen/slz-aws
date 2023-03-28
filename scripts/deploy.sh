#!/bin/bash

set -e

# Define AWS region and S3 bucket name
REGION="ap-southeast-2"
BUCKET_NAME="slz-lambda-functions"
ZIP_FILE_NAME="slz-lambda-fns.zip"

# upload the zip file to S3
AWS_SDK_LOAD_CONFIG=1 aws s3 cp build/$ZIP_FILE_NAME s3://$BUCKET_NAME/$ZIP_FILE_NAME --region $REGION

