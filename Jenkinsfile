pipeline {
     
     agent any

        tools{
            dockerTool 'Docker'
            nodejs 'Node-18.15.0'
        }

        stages {
            stage("build"){
                steps{
                    echo 'Executing npm...'
                    sh 'npm install'

                }
            }

            stage("test"){
                steps{
                    echo 'testing the application...'

                }
            }

            stage("deploy"){
                steps{
                    echo 'deploying the application...'

                }
            }

            stage("docker build "){
                steps{

                   sh 'docker build -t vikasdfghjl/node-app:${BUILD_NUMBER} .'
                }
            }


            stage("docker login"){
                steps{
                withCredentials([string(credentialsId: 'docker-pwd-id', variable: 'docker-pwd-var')]) {
                   sh '''
                   aws ecr get-login-password --region ap-south-1 | docker login -u AWS --password-stdin ec2-user@ec2-43-205-198-138.dkr.ecr.ap-south-1.amazonaws.com"
                   '''
                }
              }
            }

            stage("docker push"){
                steps{

                     sh 'docker push vikasdfghjl/node-app:${BUILD_NUMBER}'

                }
            }
        }

        post{
            always{
                sh 'docker logout'
            }
        }
 }


     
