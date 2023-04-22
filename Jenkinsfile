pipeline {
     
     agent any        
        stages {
            stage("build"){
                steps{
                    echo 'Executing npm...'
                    nodejs('Node-18.15.0'){
                        sh 'npm install'
                    }
                    
                    
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
        }


     
}