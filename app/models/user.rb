class User < ApplicationRecord
  has_many :bank_accounts
  has_many :cards, through: :bank_accounts
end
