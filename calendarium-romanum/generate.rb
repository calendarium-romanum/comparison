require 'calendarium-romanum/cr'

calendar = CR::Calendar.for_day(Date.today, CR::Data::GENERAL_ROMAN_ENGLISH.load)

calendar.each do |day|
  date = day.date
  day.celebrations.each do |c|
    puts "#{date.month}/#{date.day} #{c.title}, #{c.rank.short_desc}"
  end
end
