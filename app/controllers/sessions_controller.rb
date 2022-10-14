class SessionsController < ApplicationController
    def create
        @user = User.find_by(username: params[:username])
        if @user&.authenticate(params[:password])
            session[:user_id] = @user.id
            render json: @user, status: :ok
        else
            render json: {error: "Incorrect username or password"}, status: :unauthorized
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
