class CreateCurrencies < ActiveRecord::Migration[5.2]
  def change
    create_table :currencies do |t|
      t.string :currency
      t.float :exchange_rate
      t.string :symbol

      t.timestamps
    end
  end
end
