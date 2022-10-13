class ProductsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index 
        render json: Product.all, status: :ok
    end

    def show
       product = Product.find_by(id: params[:id])
       if product
            render json: product
       else
            render json: {error: "Product not found"}, status: :not_found
       end
    end

    private
    def render_not_found_response
        render json: { error: "Product not found" }, status: :not_found
    end
end
