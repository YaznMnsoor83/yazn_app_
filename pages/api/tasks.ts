export default function handler(req, res) {
    if (req.method === 'POST') {
      const { task } = req.body;
  
      // يجب تخزين المهمة في قاعدة البيانات هنا
  
      res.status(200).json({ message: 'Task added successfully' });
    }
  }