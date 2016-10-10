class CreateWritingSamples < ActiveRecord::Migration[5.0]
  def change
    create_table :writing_samples do |t|
      t.text :content
      t.string :author
      t.string :genre
    end
  end
end
