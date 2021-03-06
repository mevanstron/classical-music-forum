Category.create(title: "History", path: "history")
Category.create(title: "Industry", path: "industry")

SubCategory.create(category_id: "1", title: "Early Music", path: "early_music")
SubCategory.create(category_id: "1", title: "Baroque Era", path: "baroque_era")
SubCategory.create(category_id: "1", title: "Classical Era", path: "classical_era")
SubCategory.create(category_id: "1", title: "Romantic Era", path: "romantic_era")
SubCategory.create(category_id: "1", title: "20th Century", path: "20th_century")
SubCategory.create(category_id: "1", title: "21st Century", path: "21st_century")
SubCategory.create(category_id: "2", title: "News", path: "news")
SubCategory.create(category_id: "2", title: "Articles", path: "articles")
SubCategory.create(category_id: "2", title: "Recordings", path: "recordings")

ForumThread.create(sub_category_id: "1", title: "Introduction")
ForumThread.create(sub_category_id: "1", title: "Gregorian Chant")
ForumThread.create(sub_category_id: "1", title: "Troubadours")
ForumThread.create(sub_category_id: "2", title: "Introduction")
ForumThread.create(sub_category_id: "2", title: "J.S. Bach")
ForumThread.create(sub_category_id: "2", title: "Handel")
ForumThread.create(sub_category_id: "3", title: "Introduction")
ForumThread.create(sub_category_id: "3", title: "Haydn")
ForumThread.create(sub_category_id: "3", title: "Mozart")
ForumThread.create(sub_category_id: "4", title: "Introduction")
ForumThread.create(sub_category_id: "4", title: "Beethoven")
ForumThread.create(sub_category_id: "4", title: "Wagner")
ForumThread.create(sub_category_id: "5", title: "Introduction")
ForumThread.create(sub_category_id: "5", title: "Bartok")
ForumThread.create(sub_category_id: "5", title: "Stravinsky")
ForumThread.create(sub_category_id: "6", title: "Introduction")
ForumThread.create(sub_category_id: "6", title: "Jennifer Higdon")
ForumThread.create(sub_category_id: "6", title: "John Mackey")
ForumThread.create(sub_category_id: "7", title: "New Works")
ForumThread.create(sub_category_id: "7", title: "Academic")
ForumThread.create(sub_category_id: "8", title: "Biographical")
ForumThread.create(sub_category_id: "8", title: "Performance Review")
ForumThread.create(sub_category_id: "9", title: "Orchestral")
ForumThread.create(sub_category_id: "9", title: "Choral")

Post.create(thread_id: "1", content: "Welcome to the Early Music Forum Section! Please be civil and stay on topic!")
Post.create(thread_id: "4", content: "Welcome to the Baroque Era Forum Section! Please be civil and stay on topic!")
Post.create(thread_id: "7", content: "Welcome to the Classical Era Forum Section! Please be civil and stay on topic!")
Post.create(thread_id: "10", content: "Welcome to the Romantic Era Forum Section! Please be civil and stay on topic!")
Post.create(thread_id: "13", content: "Welcome to the Twentieth Century Music Forum Section! Please be civil and stay on topic!")
Post.create(thread_id: "16", content: "Welcome to the Twenty First Century Music Forum Section! Please be civil and stay on topic!")
Post.create(thread_id: "19", content: "I can't wait to hear what new musics land on this thread!")
Post.create(thread_id: "21", content: "Can anyone recommend a good biography on George Solti?")
Post.create(thread_id: "21", content: "Can anyone recommend a good biography on George Solti?")
Post.create(thread_id: "23", content: "I LOVE Ricardo Chailly's reocrding of Mahler 8 with the Royal Concertgebouw Orchestra!")
