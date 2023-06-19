class CartsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  # GET /carts
  def index
    @carts = Cart.all

    render json: @carts
   
  end

  # GET /carts/1
  def show
    render json: @cart
  end

  # POST /carts
  def create
    cart = Cart.create!(cart_params)
        render json: cart, status: :created
    # @cart = Cart.new(cart_params)

    # if @cart.save
    #   render json: @cart, status: :created, location: @cart
    # else
    #   render json: @cart.errors, status: :unprocessable_entity
    # end
  end

  # PATCH/PUT /carts/1
  def update
    if @cart.update(cart_params)
      render json: @cart
    else
      render json: @cart.errors, status: :unprocessable_entity
    end
  end

  # DELETE /carts/1
  def destroy
    
    cart = get_cart
    cart.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_cart
      @cart = Cart.find(params[:id])
    end

    def get_cart
      Cart.find_by(id: params[:id])  
  end
    def cart_params
      params.permit(:image, :name, :category, :description, :price)
  end

    # Only allow a list of trusted parameters through.
    # def cart_params
    #   params.require(:cart).permit(:image, :name, :category, :description, :price)
    # end
end
