class Currency < ApplicationRecord
  def dollars?
    currency == "dollars"
  end

  def dinar?
    currency == "dinar"
  end
end
