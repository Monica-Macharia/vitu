class SessionsController < ApplicationController
    
    
  before_action :authorize
  skip_before_action :authorize, only: :create
  def create
        user = User.find_by(email: params[:email])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: {error: "Incorrect name or password"}, status: :unauthorized
        end
    end

    def destroy
        if session[:user_id]
            session.delete :user_id
        else
            render json: {error: "User unauthorized"}, status: :unauthorized
        end
    end
end
