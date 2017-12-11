module GamesHelper

	def name_game_test
		print "what is your name?"
		answer = gets.chomp
		p answer
	end

	def omg
    my_input = my_params['my_input']
    #do whatever you want with my_input
    p my_input
  	end


    def my_params
    params.permit(:my_input, :string, :age) #params that you use
    end

end
