unit gameOfLifeGod;

interface

type
  TgameOfLifeGod = class(TObject)

  private
    procedure createRandomInitialMap();
    function getRandomDeadOrAliveState(): Boolean;
  public
    procedure startGameOfLife();
  end;

implementation

procedure TgameOfLifeGod.createRandomInitialMap();
begin

end;

function TgameOfLifeGod.getRandomDeadOrAliveState(): Boolean;
begin
  Result := False;
end;

procedure TgameOfLifeGod.startGameOfLife();
begin

end;

end.

