class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_record
    # def create
    #     user = User.create(user_params)
    #     render json: user
    # end
    
    # def show
    #     user = User.find_by!(id: [params: :id])
    #     render json: user, serializer: UserSerializer, status: :ok
    # end

    #GET /users
    def index
        @users = User.all
        render json: @users
    end

    #GET /users/1
    def show
        @user = User.find_by(id: session[:user_id])
        if @user
            render json: @user, status: :ok
        else
            render json: {error: "Unauthorized"}, status: :unauthorized
        end
    end

    #POST /users
    def create
        @user = User.create(user_params)
        session[:user_id] = @user.id
        render json: @user, status: :created
    end

    #PATCH/PUT /users/1
    def update
        if @user.update!(user_params)
            render json: @user
        end
    end

    #DELETE /users/1
    def destroy
        @user.destroy
        head :no_content
    end

    
    
    private

    # def not_found_response
    #     render json: {error: "User not found"}
    # end

    # def user_params
    #     params.permit(:name, :gender, :email, :password, :password_confirmation)
    # end
    #use callbacks to share common setup or constraints between actions.
    def set_user
        user = User.find(params[:id])
    end

    #only allow a list of trusted params through
    def user_params
        params.permit(:name, :email, :gender, :password)
    end

    def record_not_found
        render json: {error: "Unauthorized"}, status: :unauthorized
    end

    def render_invalid_record(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :uprocessable_entity
    end

end
