const categories = [
  {id: "1", title: "History"},
  {id: "2", title: "Industry"}
]

const subCategories = [
  {id: "1", categoryId: "1", title: "Early Music"},
  {id: "2", categoryId: "1", title: "Baroque Era"},
  {id: "3", categoryId: "1", title: "Classical Era"},
  {id: "4", categoryId: "1", title: "Romantic Era"},
  {id: "5", categoryId: "1", title: "20th Century"},
  {id: "6", categoryId: "1", title: "21st Century"},
  {id: "7", categoryId: "2", title: "News"},
  {id: "8", categoryId: "2", title: "Articles"},
  {id: "9", categoryId: "2", title: "Recordings"}
]

const threads = [
  {id: "1", subCategoryId: "1", title: "Introduction"},
  {id: "2", subCategoryId: "1", title: "Gregorian Chant"},
  {id: "3", subCategoryId: "1", title: "Troubadours"},
  {id: "4", subCategoryId: "2", title: "Introduction"},
  {id: "5", subCategoryId: "2", title: "J.S. Bach"},
  {id: "6", subCategoryId: "2", title: "Handel"},
  {id: "7", subCategoryId: "3", title: "Introduction"},
  {id: "8", subCategoryId: "3", title: "Haydn"},
  {id: "9", subCategoryId: "3", title: "Mozart"},
  {id: "10", subCategoryId: "4", title: "Introduction"},
  {id: "11", subCategoryId: "4", title: "Beethoven"},
  {id: "12", subCategoryId: "4", title: "Wagner"},
  {id: "13", subCategoryId: "5", title: "Introduction"},
  {id: "14", subCategoryId: "5", title: "Bartok"},
  {id: "15", subCategoryId: "5", title: "Stravinsky"},
  {id: "16", subCategoryId: "6", title: "Introduction"},
  {id: "17", subCategoryId: "6", title: "Jennifer Higdon"},
  {id: "18", subCategoryId: "6", title: "John Mackey"},
  {id: "19", subCategoryId: "7", title: "New Works"},
  {id: "20", subCategoryId: "7", title: "Academic"},
  {id: "21", subCategoryId: "8", title: "Biographical"},
  {id: "22", subCategoryId: "8", title: "Performance Review"},
  {id: "23", subCategoryId: "9", title: "Orchestral"},
  {id: "24", subCategoryId: "9", title: "Choral"}
]

const posts = [
  {id: "1", threadId: "1", content: "Welcome to the Early Music Forum Section! Please be civil and stay on topic!"},
  {id: "2", threadId: "4", content: "Welcome to the Baroque Era Forum Section! Please be civil and stay on topic!"},
  {id: "3", threadId: "7", content: "Welcome to the Classical Era Forum Section! Please be civil and stay on topic!"},
  {id: "4", threadId: "10", content: "Welcome to the Romantic Era Forum Section! Please be civil and stay on topic!"},
  {id: "5", threadId: "13", content: "Welcome to the Twentieth Century Music Forum Section! Please be civil and stay on topic!"},
  {id: "6", threadId: "16", content: "Welcome to the Twenty First Century Music Forum Section! Please be civil and stay on topic!"},
  {id: "7", threadId: "19", content: "I can't wait to hear what new musics land on this thread!"},
  {id: "8", threadId: "21", content: "Can anyone recommend a good biography on George Solti?"},
  {id: "9", threadId: "21", content: "Can anyone recommend a good biography on George Solti?"},
  {id: "10", threadId: "23", content: "I LOVE Ricardo Chailly's reocrding of Mahler 8 with the Royal Concertgebouw Orchestra!"}
]


export { categories, subCategories, threads, posts }
