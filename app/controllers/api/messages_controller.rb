class Api::MessagesController < ApplicationController
  def index
    # @messages = Messages.includes(:user).where('id > ?', params[:group_id])
    @group = Group.find(params[:group_id]) 
    @messages = @group.messages.includes(:user).where('id > ?', params[:last_id]) 
  end
end

