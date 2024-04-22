## AWS Cloud Services

- AWS Command Line Interface (CLI)
- Using Amazon API Gateway
- creating EC2 environment
- sample application using AWS Cloud9
- simple HTTP API

1. The purpose of AWS Command Line Interface (CLI)

- open source management tool for AWS services
- enables access to AWS services/resources
- aws management console functionality

Example THAT aws cli helps in:

- upgrading EC2 machine
- changing the name of a table in a database or DynamoDB table

2. Features of AWS CLI

- public APIs
- Service features
- shell scripts
- customization tools

3.  check AWS version

```bash
$ aws --version
```

4.  AWS CLI Configuration

- Access key id
- secret access key
  (`both to authenticate and authorize all future access points and not to be shared with anyone`)
- AWS Region (default)
- output format (default)

Key Points:

- access key, secret access key used for signing programmatic requests
- created from aws management console
- avoid creating root access keys
- region is mandatory (provides --region flag and default name)
- json output format or yaml/yaml stream/ text/ table

5.  Profiles

- to start the configuration process

```bash
$ aws configure --profile [name]
```

6.  Configuration Precedence AND TIPS

- command line options will override everything
- environment variables
- cli credentials
- cli configuration
- container credentials
- iam instance profile credentials
- there gonna be named profiles
- single sign-on user credentials
- can provide auto completion

Key Points

- settings saved in files
- can have multiple profiles and divided by profiles
- settings override

7.  AWS CLOUD9

- cloud based development environment (IDE)
- supports nodejs, python, go etc..
- `rich coding editing`
- `built-in terminal`
- runtime debuggers
- comprehensive tool-set
- `serverless development tools`
- highly configurable (`extensive run configuration`)
- aws services integration
- file system
- code development to software release to the cloud
- multi-language support
- `linux server connectivity`
- `continuous delivery`
- `revision history`
- `collaboration tools`

How Cloud9 work?

- interact with any browser
- uses computing resources and environment (EC2 instances and existing instances)
- accesses other AWS Services
- stores projects in repositories

Cloud9 Activities

- code
- build
- run
- test
- debug
- deploy/release

Cloud9 Environments

- local or remote projects
- local or cloned files
- remote repo cloning

8. The purpose of Amazon API Gateway

- Facilitate secure and efficient communication between users and applications by managing HTTP requests and responses.

Amazon API Gateway

- exposes apis or REST APIs or HTTP APIs or WebSocket APIs to the internet

RESTful APIs and API Gateway

- stateless protocols, no session management
- HTTP-based request-response model
- client applications make requests by sending an HTTP request to a URL associated with the API
- standard HTTP methods

* GET: retrieve data from a resource
* POST: submit data to be processed to a resource for creation or updating
* PUT: update a resource by replacing it with new data
* DELETE: remove all data from a resource

WebSocket APIs and API Gateway

- stateful bi-directional communication between clients and servers
- WebSocket protocol
- incoming message routing

| REST APIs | HTTP APIs | WebSocket APIs |
| --------- | --------- | -------------- |
| Single    | Multiple  | Single         |
| Stateless | Stateful  | Stateless      |

Both use similar authorizers such as authentication and authorizations
Both support all sorts of AWS services

REST APIs can not do  and HTTP API might be good idea and also can integrate with AWS Services :
- can use things like Amazon Cognito service or the Identity Access Manager to separate the individual endpoints based on provided authorization scheme
- can use OpenID or OAuth2

The main difference between both is API management
- REST APIs have more management features (usage plan or API KEYS)
- REST APIs support more development features (caching, request or response validation, different body transformation perform, execution logs)

Choosing an HTTP or REST API
- Security
- API type (private type: not particularly publicly exposed)
- monitoring

9. AMAZON API Gateway Security and Logging

AWS Shared Responsibility Model
- concept that is describing who's is responsible for software and hardware that it particularly runs on.

- Security of cloud
- Physical Infrastructure Security
- Security in the Cloud: Services and data security

AWS Gateway Logging and Monitoring
- Amazon CloudWatch Logs
- X-ray
- Amazon CloudWatch alarms
- Access logging to Kinesis Data Firehose

AWS CloudTrail
- logs the API usage by users and their roles

AWS X-Ray
- not just a logging tool, gives optimization suggestions about what's based on the usage patterns of my API

AWS Config
- tracker for the configuration parts of my API

API Gateway Data Encryption
- encrypt at rest using KMS keys(data is received to somewhere like if you send it to a database for example that data is going to be encrypted at service)
- encrypt data in transit  using TLS/SSL protocols (send information through HTTPs protocol)

Internetwork traffic: VPC OR Virtual Private Cloud
- large set of ip addresses that can be provisioned
- private REST APIs for private network within AWS environment will allow only particular services in that VPC to be able to access that API
- Interface VPC endpoints
- Resource Polices

IAM (Identity & Access Management): controls how your AWS account  members interact with your resources.
- Audience
- Authentication with identities
- policy based access management
- troubleshooting identity and access
- service linked roles for API Gateway

- API Gateway identity based policies
- API Gateway resource based policies 
- Authorization based on API Gateway tags
- API Gateway  IAM roles

Logging API Gateway Calls with CloudTrail

- capturing REST APIs calls as events
- creating trails
- capturing event details

10. Installing AWS CLI on Windows

aws console > IAM > 

https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html > Windows > msiexec.exe /i https://awscli.amazonaws.com/AWSCLIV2.msi > aws --version > aws configure --profile [name]

Qn7vC3^}