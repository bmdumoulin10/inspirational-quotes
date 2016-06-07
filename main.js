(function(){
    angular.module('favQuotesApp', []) //creates an angular object
        .controller('formController', formController)
        
        function formController(){
            var formCtrl = this
            
            formCtrl.enterQuotes = [
                {   
                    quote: 'Just keep moving forward and don\'t give a shit about what anybody thinks. Do what you have to do for you.',
                    author: 'Johnny Depp'
                },
                {   
                    quote: 'The important thing is not to stop questioning. Curiosity has its own reason for existing.',
                    author: 'Albert Einstein'
                },
                {   
                    quote: 'Design is not just what it looks like and feels like. Design is how it works.',
                    author: 'Steve Jobs'
                },
                {   
                    quote: 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
                    author: 'Albert Einstein'
                },
                {   
                    quote: 'Innovation distinguishes between a leader and a follower.',
                    author: 'Steve Jobs'
                },
                {   
                    quote: 'Everything should be made as simple as possible, but not simpler.',
                    author: 'Albert Einstein'
                }]
                
            formCtrl.newQuote = ''
            formCtrl.newAuthor = ''
            
            formCtrl.title = 'Favorite Quotes'

            formCtrl.addQuote = function(){
                if(formCtrl.newQuote !== '' && formCtrl.newAuthor !== ''){
                formCtrl.enterQuotes.push({
                    quote: formCtrl.newQuote,
                    author: formCtrl.newAuthor
                })}
                else{
                    alert('Please complete both fields in order to add a new quote')
                }
                
                formCtrl.newQuote = ''
                formCtrl.newAuthor = ''
            }
            
            formCtrl.remove = function(index){
                formCtrl.enterQuotes.splice(index,1)
            }
        }
}());