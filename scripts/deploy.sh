#!/bin/bash

# Define AWS region and S3 bucket name
REGION="ap-southeast-2"
BUCKET_NAME="slz-lambda-functions"

# upload the zip file to S3
aws s3 cp build/slz-lambda-fns.zip s3://$BUCKET_NAME/slz-lambda-fns.zip --region $REGION
