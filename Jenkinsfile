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
                    script{

                        def dockerImage

                        dockerImage = docker.build('vikasdfghjl/node-app:${BUILD_NUMBER}')

                    }
                }
            }

            stage("docker login and push"){
                environment{
                    DOCKER_REGISTRY = 'http://hub.docker.com'
                    DOCKER_CREDENTIALS = 'my-docker-creds'
                }
               steps{
                    script{
                        withDockerRegistry([credentialsId: env.DOCKER_CREDENTIALS, url: env.DOCKER_REGISTRY]) {
                            // Push the Docker image
                            dockerImage.push()
                        }
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



     
