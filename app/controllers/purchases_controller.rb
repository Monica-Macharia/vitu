class PurchasesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    #before_action :authorize
    
    #GET /purchases
    def index
        purchases = Purchase.all 
        render json: purchases, status: :ok
    end

    #GET /purchases/:id
    def show
        purchase = get_purchase
        render json: purchase, status: :ok
    end

    #PATCH /purchases/:id
    def update
        purchase = get_purchase
        purchase.update!(purchase_params)
        render json: purchase, status: :ok
    end

    #POST /purchases
    def create
        purchase = Purchase.create!(purchase_params)
        render json: purchase, status: :created
    end

    #DELETE /purchases/:id
    def destroy
        purchase = get_purchase
        purchase.destroy
        head :no_content
    end

    private

    def get_purchase
        Purchase.find_by(id: params[:id])  
    end

    def purchase_params
        params.permit(:quantity)
    end

    def render_not_found_response
        render json: {error: "Purchase not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors:invalid.record.errors.full_messages}, status: :uprocessable_entity
    end


end
