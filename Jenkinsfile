pipeline {
     
     agent any

      tools{
        dockerTool 'Docker'
        nodejs 'Node-18.15.0'
        }

        stages {
            stage("Build"){
                steps{
                checkout scm
                    echo 'Executing npm...'
                    sh 'npm install'
                }
            }

            stage("docker build "){

                steps{
                 sh "docker build -t vikasdfghjl/node-app:${BUILD_NUMBER} ."
                }
            }

            stage("docker login and push"){
                environment{
                    DOCKER_REGISTRY = 'http://hub.docker.com'
                    DOCKER_CREDENTIALS = 'my-docker-creds'
                }
               steps{

                        withDockerRegistry([credentialsId: env.DOCKER_CREDENTIALS, url: env.DOCKER_REGISTRY]) {
                            // Push the Docker image
                            sh "docker push vikasdfghjl/node-app:${BUILD_NUMBER}"
                        }


               }
            }
        }

        post{
            always{
                sh 'docker logout'
            }
        }
 }



     
