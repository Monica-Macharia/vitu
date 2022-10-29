class ApplicationController < ActionController::API
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    include ActionController::Cookies
    wrap_parameters format: []
    before_action :authorize
  
    # only authorized users can login especially using the autologin feauture
    private
  
    def render_unprocessable_entity_response(exception)
      render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
  
    def authorize
      return
      render json: { errors: ['Not Authorized'] }, status: :unathorized unless session.include? :user_id
    end
end
