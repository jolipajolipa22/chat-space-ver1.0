class Api::MessagesController < ApplicationController
  def index
    @messages = Messages.includes(:user).where('id > ?', params[:group_id])
  end
end

