class WritingSamplesController < ApplicationController

  def index
    @writing_samples = WritingSample.all
    render json: @writing_samples
  end

  def create
    @writing_sample = WritingSample.create(writing_sample_params)
    if @writing_sample.save
      render json: @writing_sample
    else
      @writing_sample.errors.add("Error")
    end
  end

  def new
    @writing_sample = WritingSample.new
  end

  def show
    @writing_sample = WritingSample.find(params[:id])
    render json: @writing_sample
  end

  private

  def writing_sample_params
    params.require(:writing_sample).permit(:content, :author, :genre, :random)
  end

end
