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

                   sh 'docker login -u vikasdfghjl --password dckr_pat_6gDez-ReTsyPJ3ocNT8ChSXrMLE'

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


     
