class ProductsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index 
        render json: Product.all, status: :ok
    end

    def show
    end

    def update
    end

    private

    def find_product
        product = Product.find_by(id: params[:id])
    end

    def render_not_found_response
        render json: { error: "Product not found" }, status: :not_found
    end
end
