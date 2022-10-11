class UserController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
    def show
        user = User.find_by!(id: [params: :id])
        render json: user, serializer: UserSerializer, status: :ok
    end

    private

    def not_found_response
        render json: {error: "User not found"}
    end


end
