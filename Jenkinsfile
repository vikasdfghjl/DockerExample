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

                    withDockerRegistry(credentialsId: 'docker-creds', toolName: 'Docker') {

                        def dockerImage = docker.build('vikasdfghjl/node-app:${BUILD_NUMBER}')

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


     
