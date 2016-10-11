class AddRandomToWritingSamples < ActiveRecord::Migration[5.0]
  def change
    add_column :writing_samples, :random, :string
  end
end
