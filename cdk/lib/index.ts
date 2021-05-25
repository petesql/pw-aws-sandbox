import { Stack, Construct, StackProps } from '@aws-cdk/core';
import { User } from '@aws-cdk/aws-iam';

export class CdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new User(this, 'd', {
      userName: 'pw-test-user-1'
    });
  }
}
