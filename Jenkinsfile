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

                    docker.withRegistry('https://index.docker.io/v1/','docker-creds') {

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


     
