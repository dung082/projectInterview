package interview.projectInterview.Services.Interface;

import interview.projectInterview.Models.Lop;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface ILopService {
    public List<Lop> getAllLop();

    public Lop createLop(Lop lop);
}
