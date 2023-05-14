pipeline {
     
     agent any
     environment{
        DOCKERHUB_CREDS = 'DockerHubCreds'
     }

      tools{
        dockerTool 'Docker'
        nodejs 'Node-18.15.0' //can declare tools here as well so you dont have use the wrapper class at statement 12
                                // just the sh 'npm install'
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

            stage("docker login"){
                steps{
                 withCredentials([string(credentialsId: 'DOCKER_ACCESS_TOKEN', variable: 'DOCKER_ACCESS_TOKEN')]) {
                 sh 'echo ${DOCKER_ACCESS_TOKEN} | docker login -u vikasdfghjl --password-stdin'
                }
                    
                }
            } 

            stage("Build & Docker image"){
                steps{
                    sh 'docker build -t vikasdfghjl/node-app:${BUILD_NUMBER} .'
                    
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


     
