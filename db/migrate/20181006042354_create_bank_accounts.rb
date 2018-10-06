class CreateBankAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :bank_accounts do |t|
      t.integer :currency_id
      t.integer :number
      t.integer :balance
      t.references :user, foreign_key: true
      t.references :currency, foreign_key: true

      t.timestamps
    end
  end
end
