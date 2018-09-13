class CreateForumThreads < ActiveRecord::Migration[5.1]
  def change
    create_table :forum_threads do |t|
      t.string :sub_category_id
      t.string :title
      t.timestamps
    end
  end
end
