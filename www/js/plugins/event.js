def intro(mv) #img -имя картинки, логотипа, называйте как хотите.
 begin
  Graphics.freeze # подготовка к проявлению изображения 
  @intro = Sprite.new 
  # Медленное проявление изображение 
  @intro.bitmap = RPG::Cache.picture(img) 
  Graphics.transition(100) 
  # Пауза на 4 секунды 
  i = 4 # 1 секунда = 20 кадров(4 секунды * 20 кадров = 80 кадров) 
  while i > 0 
   Graphics.update # обновление экрана и пауза на 1 кадр 
   i -= 1 # вычесть из i один кадр 
  end
  Graphics.freeze # подготовка к погашению изображения 
  # Медленное погашение изображение 
  @intro.bitmap = RPG::Cache.picture("") 
  Graphics.transition(100) 
  # Удаление изображение 
  @intro.bitmap.dispose
  @intro.dispose
 end 
end