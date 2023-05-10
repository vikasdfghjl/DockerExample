pipeline {
     
     agent any

     /* tools{
        nodejs 'Node-18.15.0' //can declare tools here as well so you dont have use the wrapper class at statement 12
                                // just the sh 'npm install'
     }  */       
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