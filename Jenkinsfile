pipeline {
     
     agent any
     environment{
        DOCKER_REGISTRY = "https://hub.docker.com/repository/docker/vikasdfghjl/node-app/general"
        DOCKER_REGISTRY_CREDS = "DockerHubCreds"
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

            stages {
            stage('Build') {
            steps {
             withDockerRegistry([credentialsId: "${DOCKER_REGISTRY_CREDENTIALS}", url: "${DOCKER_REGISTRY}"]) {
             sh "docker build -t vikasdfghjkl/node-app:${BUILD_NUMBER} ."
             }
            }
             }
            }
            stage('Push') {
            steps {
                withDockerRegistry([credentialsId: "${DOCKER_REGISTRY_CREDENTIALS}", url: "${DOCKER_REGISTRY}"]) {
                 sh "docker push vikasdfghjkl/node-app:${BUILD_NUMBER}"
                    }
                }
            }


            /* stage("docker login"){
                steps{
                 withCredentials([string(credentialsId: 'dockerpwdPAT', variable: 'dockerpwd')]) {
                 sh 'echo ${passwordvar} | docker login --username vikasdfghjl --password -stdin'
                }
                    
                }
            } */

            /* stage("Build & Docker image"){
                steps{
                    sh 'docker build -t vikasdfghjl/node-app:${BUILD_NUMBER} .'
                    
                }
            }

            

            stage("docker push"){
                steps{
                   sh 'docker push vikasdfghjl/nodeDocker:${BUILD_NUMBER}'
                    
                }
             }*/



        }
    }


     
