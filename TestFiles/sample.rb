class Greeter
  def initialize(name)
    @name = name
  end
  def say_hi
    puts "Hi #{@name}!"
  end
end
g = Greeter.new("Ruby")
g.say_hi
