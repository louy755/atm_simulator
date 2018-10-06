class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.integer :pin
      t.string :card_type
      t.integer :number
      t.date :expiration_date
      t.references :bank_account, foreign_key: true

      t.timestamps
    end
  end
end
