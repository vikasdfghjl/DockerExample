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


            stage("docker build and Push"){
                steps{
                script{
                    // this will automatically login into docker
                    docker.withRegistry('https://index.docker.io/v1/','docker-creds') {

                        def dockerImage = docker.build('vikasdfghjl/node-app:latest')

                        dockerImage.push()
                    }
                }

              }
            }

            stage("test"){
                  steps{
                      echo 'testing app...'

                 }
            }

            stage("deploy"){
                    steps{
                    sh '''

                    docker stop vikasdfghjl/node-app
                    docker rm vikasdfghjl/node-app
                    docker pull vikasdfghjl/node-app:latest
                    docker -d -p 3000:3000 vikasdfghjl/node-app:latest

                    '''
                    }
            }



        }

        post{
            always{
                sh 'docker logout'
            }
        }
 }


     
