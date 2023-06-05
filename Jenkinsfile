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
                 withCredentials([usernamePassword(credentialsId: 'c495b40d-da43-4eb5-8973-8315922e704d', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {

                     sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin'
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


     
