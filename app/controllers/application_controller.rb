class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  protected
  def change_current_account_if_necessary
    session[:current_account] = AtmMachine.current_account.try(:id)
  end

  def current_account
    session[:current_account]
  end

  def current_account=(account)
    session[:current_account] = account
  end
end
