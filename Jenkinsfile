pipeline {
     
     agent any

      tools{
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

            stage("Build & Docker image"){
                steps{
                    sh 'docker build -t vikasdfghjl/nodedockerexam:${BUILD_NUMBER} .'
                    
                }
            }

            stage("docker login"){
                steps{
                    withCredentials([string(credentialsId: 'dokcerid', variable: 'Dockerpwd')]) {
                    sh 'docker login -u vikasdfghjl -p ${Dockerpwd}'
                }
                    
                }
            }

            stage("docker push"){
                steps{
                   sh 'docker push vikasdfghjl/nodeDocker:${BUILD_NUMBER}'
                    
                }
            }



        }


     
}