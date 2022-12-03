import pygame
import random
from pygame.locals import *
pygame.init()
# # #
a = True
# # #
# Переменные
height = 750
width = 1350
font = pygame.font.Font("font_1.otf", 50)
screen = pygame.display.set_mode((width, height))
ball_speed = 2
framerate = 60
clock = pygame.time.Clock()
def screen_draw():
    screen.fill((0, 0, 0))
# Переменные
# Классы
class Ball():
    def init(self,x,y):
        self.rect = Rect(x, y, 60, 60)
        self.x = x
        self.y = y
        self.rotation_x = 1
        self.rotation_y = 2

    def update(self, wall_player1, wall_player2):
        if self.rotation_x == 1:
            self.x = self.x - ball_speed
        if self.rotation_x == 2:
            self.x = self.x + ball_speed
        if self.rotation_y == 1:
            self.y = self.y + ball_speed
        if self.rotation_y == 2:
            self.y = self.y - ball_speed
        if self.y >= height:
            self.rotation_y = 2
        if self.y <= 0:
            self.rotation_y = 1
        if self.rect.colliderect(wall_player1):
            self.rotation_x = 2
            print("А")
        if self.rect.colliderect(wall_player2):
            self.rotation_x = 1
            print("А")
    def draw(self):
        pygame.draw.circle(screen, (255, 255, 255), (self.x, self.y), 50)
class Wall_Player():
    def init(self, x, y, player_name):
        self.rect = Rect(x, y, 50, 200)
        self.x = x
        self.y = y
        self.player_name = player_name
    def draw(self):
        pygame.draw.rect(screen, (255, 255, 255), self.rect)
    def controls(self):
        if self.player_name == 1:
            keys_controls = pygame.key.get_pressed()
            if keys_controls[K_w]:
                self.rect.move_ip(0, -4)
            if keys_controls[K_s]:
                self.rect.move_ip(0, 4)
        if self.player_name == 2:
            keys_controls = pygame.key.get_pressed()
            if keys_controls[K_UP]:
                self.rect.move_ip(0, -4)
            if keys_controls[K_DOWN]:
                self.rect.move_ip(0, 4)

# Классы
wall_player1 = Wall_Player(0, height // 2, 1)
wall_player2 = Wall_Player(width - 50, height // 2, 2)
ball = Ball(width // 2, height // 2)
while a:
    clock.tick(framerate)
    screen_draw()
    ball.draw()
    wall_player1.controls()
    wall_player2.controls()
    wall_player1.draw()
    wall_player2.draw()
    ball.update(wall_player1, wall_player2)

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            a = False
    pygame.display.update()
pygame.quit